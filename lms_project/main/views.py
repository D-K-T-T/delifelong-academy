from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework import permissions
from .serializers import TeacherSerializer, QuizSerializer,ResourceSerializer,QuestionSerializer
from . import models
from .models import Quiz, Question, Teacher, StudentQuizResult, Resource, StudentProgress, Student
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from rest_framework.authtoken.views import ObtainAuthToken  # Add this line
from rest_framework.authtoken.models import Token  # Add this line
from rest_framework.permissions import AllowAny
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.db.models import Q
from rest_framework.authentication import TokenAuthentication, SessionAuthentication







#Create your views here.
#generics.ListCreateAPIView for GET and POST requests
class TeacherList(generics.ListCreateAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    permission_classes=[permissions.IsAuthenticated]
       
#generics.RetrieveUpdateDestroyAPIView for GET,PUT AND DELETE 
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
    permission_classes=[permissions.IsAuthenticated]

# class QuizList(generics.ListCreateAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#     permission_classes = [permissions.IsAuthenticated]


# class QuizDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Quiz.objects.all()
#     serializer_class = QuizSerializer
#     permission_classes = [permissions.IsAuthenticated]

class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [permissions.IsAuthenticated]




class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class ResourceRecommendation(generics.GenericAPIView):
    def get(self, request):
        # Placeholder AI recommendation logic
        return Response({
            "resources": ["Resource 1", "Resource 2", "Resource 3"]
        })


class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()  # Fetch all resources
    serializer_class = ResourceSerializer  # Use the serializer for this model
    permission_classes = [permissions.IsAuthenticated]  # Require authentication


@login_required
def check_authentication(request):
    return JsonResponse({"authenticated": True, "username": request.user.username})


class UpdateStudentProgress(APIView):
    """
    API view to update the progress of a student on a resource.
    Expects a POST request with student_id, resource_id, progress, and (optionally) score.
    """

    def post(self, request, format=None):
        student_id = request.data.get("student_id")
        resource_id = request.data.get("resource_id")
        progress = request.data.get("progress")
        score = request.data.get("score", None)

        # Validate required data
        if not all([student_id, resource_id, progress is not None]):
            return Response({"detail": "Missing required fields."}, status=status.HTTP_400_BAD_REQUEST)

        # Get the student and resource objects (or return 404 if not found)
        student = get_object_or_404(Student, pk=student_id)
        resource = get_object_or_404(Resource, pk=resource_id)

        # Retrieve or create a StudentProgress record for this student-resource pair
        progress_record, created = StudentProgress.objects.get_or_create(
            student=student,
            resource=resource,
            defaults={"progress": progress, "score": score, "is_completed": progress == 100}
        )

        # If the record already exists, update it
        if not created:
            progress_record.progress = progress
            if score is not None:
                progress_record.score = score
            progress_record.is_completed = (progress == 100)
            progress_record.save()

        return Response({"detail": "Student progress updated successfully."}, status=status.HTTP_200_OK)
    


# class AuthStatusView(APIView):
#     def get(self, request):
#         return Response({"authenticated": request.user.is_authenticated})

# class AuthStatusView(APIView):
#     permission_classes = [AllowAny]  # Allow unauthenticated access to check status

#     def get(self, request):
#         try:
#             is_authenticated = request.user.is_authenticated
#             data = {
#                 "authenticated": is_authenticated,
#                 "user": {
#                     "id": request.user.id,
#                     "username": request.user.username,
#                     "is_staff": request.user.is_staff
#                 } if is_authenticated else None
#             }
#             return Response(data, status=status.HTTP_200_OK)
#         except Exception as e:
#             return Response(
#                 {"error": "Authentication status check failed", "detail": str(e)},
#                 status=status.HTTP_500_INTERNAL_SERVER_ERROR
#             )
# class AuthStatusView(APIView):
#     authentication_classes = [TokenAuthentication, SessionAuthentication]  # Explicitly add authentication
#     permission_classes = [AllowAny]

#     def get(self, request):
#         try:
#             auth_header = request.META.get('HTTP_AUTHORIZATION', '')
#             user = None
#             is_authenticated = False

#             if auth_header.startswith('Token '):
#                 token_key = auth_header.split(' ')[1]
#                 try:
#                     token = Token.objects.get(key=token_key)
#                     user = token.user
#                     is_authenticated = True
#                 except Token.DoesNotExist:
#                     pass
#             else:
#                 user = request.user
#                 is_authenticated = user.is_authenticated

#             if is_authenticated and user:
#                 return Response({
#                     "authenticated": True,
#                     "user": {
#                         "id": user.id,
#                         "username": user.username,
#                         "email": user.email,
#                         "is_staff": user.is_staff
#                     }
#                 }, status=status.HTTP_200_OK)

#             return Response({"authenticated": False, "user": None}, status=status.HTTP_200_OK)
        
#         except Exception as e:
#             print(f"Auth status error: {str(e)}")  
#             return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
# class AuthStatusView(APIView):
#     permission_classes = [AllowAny]

#     def get(self, request):
#         try:
#             # Check token from header
#             auth_header = request.META.get('HTTP_AUTHORIZATION', '')
#             if auth_header.startswith('Token '):
#                 token_key = auth_header.split(' ')[1]
#                 try:
#                     token = Token.objects.get(key=token_key)
#                     user = token.user
#                     is_authenticated = True
#                 except Token.DoesNotExist:
#                     user = None
#                     is_authenticated = False
#             else:
#                 user = request.user
#                 is_authenticated = user.is_authenticated

#             print(f"Auth Check - User: {user}, Authenticated: {is_authenticated}")  # Debug log

#             return Response({
#                 "authenticated": is_authenticated,
#                 "user": {
#                     "id": user.id,
#                     "email": user.email,
#                     "username": user.username,
#                     "is_staff": user.is_staff
#                 } if is_authenticated else None
#             })
#         except Exception as e:
#             print(f"Auth Error: {str(e)}")  # Debug log
#             return Response({
#                 "authenticated": False,
#                 "user": None,
#                 "error": str(e)
#             })

class AuthStatusView(APIView):
    authentication_classes = [TokenAuthentication]  # Only use token authentication
    permission_classes = [AllowAny]

    def get(self, request):
        try:
            # Get token from header
            auth_header = request.META.get('HTTP_AUTHORIZATION', '')
            
            # Initialize variables
            user = None
            is_authenticated = False

            if auth_header.startswith('Token '):
                token_key = auth_header.split(' ')[1]
                try:
                    token = Token.objects.get(key=token_key)
                    user = token.user
                    is_authenticated = True
                except Token.DoesNotExist:
                    pass

            # Debug log but only when authentication changes
            print(f"Auth Check - User: {user}, Authenticated: {is_authenticated}")

            return Response({
                "authenticated": is_authenticated,
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "username": user.username,
                    "is_staff": user.is_staff
                } if is_authenticated else None
            }, status=status.HTTP_200_OK)  # Add explicit status code
            
        except Exception as e:
            print(f"Auth Error: {str(e)}")
            return Response({
                "authenticated": False,
                "user": None,
                "error": str(e)
            }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)  # Add explicit status code

# # class TeacherLoginView(APIView):
#     def post(self, request):
#         email = request.data.get("email")
#         password = request.data.get("password")
#         user = authenticate(username=email, password=password)
#         if user:
#             return Response({"token": "dummy-teacher-token"})  # Replace with real token logic
#         return Response({"error": "Invalid credentials"}, status=400)

# class StudentLoginView(APIView):
#     def post(self, request):
#         email = request.data.get("email")
#         password = request.data.get("password")
#         user = authenticate(username=email, password=password)
#         if user:
#             return Response({"token": "dummy-student-token"})  # Replace with real token logic
#         return Response({"error": "Invalid credentials"}, status=400)


from django.contrib.auth.models import User
from rest_framework import status

class TeacherRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        username = request.data.get('username')

        if not all([email, password, username]):
            return Response({
                'error': 'Email, password and username are required'
            }, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({
                'error': 'Email already registered'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password,
                is_staff=True  # Mark as staff for teachers
            )
            
            # Create associated Teacher profile
            Teacher.objects.create(user=user)
            
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.id,
                'email': user.email,
                'username': user.username,
                'is_staff': user.is_staff
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({
                'error': str(e)
            }, status=status.HTTP_400_BAD_REQUEST)

class StudentRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        username = request.data.get('username')

        if not all([email, password, username]):
            return Response({
                'error': 'Email, password and username are required'
            }, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(email=email).exists():
            return Response({
                'error': 'Email already registered'
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create_user(
                username=username,
                email=email,
                password=password,
                is_staff=False  # Students are not staff
            )
            
            # Create associated Student profile
            Student.objects.create(user=user)
            
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.id,
                'email': user.email,
                'username': user.username,
                'is_staff': user.is_staff
            }, status=status.HTTP_201_CREATED)

        except Exception as e:
            return Response({
                'error': str(e)
            }, status=status.HTTP_400_BAD_REQUEST)
class TeacherLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        
        if not email or not password:
            return Response({
                "error": "Email and password are required"
            }, status=status.HTTP_400_BAD_REQUEST)

        # Use the custom backend
        user = authenticate(request, username=email, password=password)
        
        if not user:
            return Response({
                "error": "Invalid credentials"
            }, status=status.HTTP_401_UNAUTHORIZED)
            
        if not user.is_staff:
            return Response({
                "error": "User is not authorized as a teacher"
            }, status=status.HTTP_403_FORBIDDEN)

        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.id,
            'email': user.email,
            'username': user.username,
            'is_staff': user.is_staff
        }, status=status.HTTP_200_OK)
class StudentLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        
        if not email or not password:
            return Response({
                "error": "Email and password are required"
            }, status=status.HTTP_400_BAD_REQUEST)

        # Use the custom backend
        user = authenticate(request, username=email, password=password)
        
        if not user:
            return Response({
                "error": "Invalid credentials"
            }, status=status.HTTP_401_UNAUTHORIZED)
            
        if user.is_staff:  # Check that user is NOT staff (is a student)
            return Response({
                "error": "User is not authorized as a student"
            }, status=status.HTTP_403_FORBIDDEN)

        token, _ = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.id,
            'email': user.email,
            'username': user.username,
            'is_staff': user.is_staff
        }, status=status.HTTP_200_OK)


# Login View
class LoginView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super().post(request, *args, **kwargs)
        token, created = Token.objects.get_or_create(user=self.user)
        return Response({'token': token.key, 'user_id': self.user.id, 'username': self.user.username})

# Logout View
class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        request.user.auth_token.delete()
        return Response({"message": "Successfully logged out"}, status=204)