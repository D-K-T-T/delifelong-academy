from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, viewsets
from rest_framework import permissions
from .serializers import TeacherSerializer, QuizSerializer,ResourceSerializer,QuestionSerializer
from . import models
from .models import Quiz, Question, Teacher, StudentQuizResult, Resource




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

