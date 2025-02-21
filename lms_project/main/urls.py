from django.urls import path, include
from . import views 
from .views import ResourceViewSet, QuestionViewSet,QuizViewSet, UpdateStudentProgress
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'resources', ResourceViewSet) 
router.register(r'quizzes', QuizViewSet)  
router.register(r'questions', QuestionViewSet)



urlpatterns=[
#maps to the TeacherList view, handling GET and POST requests for the /teacher/ endpoint.
 path('teacher/',views.TeacherList.as_view()),
 path('', include(router.urls)),
 path('update-progress/', UpdateStudentProgress.as_view(), name="update-progress"),

#maps to the TeacherDetail view, handling GET, PUT, PATCH, and DELETE requests for a specific teacher based on their primary key (pk).
 path('teacher/<int:pk>/',views.TeacherDetail.as_view())]