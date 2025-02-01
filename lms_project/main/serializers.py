from rest_framework import serializers
from .models import Quiz, Question, Teacher, StudentQuizResult, Resource
from . import models

# convert complex Teacher model instances into Python data types, which can then be easily rendered into JSON.
# class TeacherSerializer(serializers.ModelSerializer):
#     class Meta:
#         model=models.Teacher
#         fields=['full_name','email','password','qualification','phone_no','address'] 
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = ['id', 'full_name', 'email', 'qualification', 'phone_no', 'address']


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = ['id', 'course', 'text', 'difficulty']


class QuizSerializer(serializers.ModelSerializer):
    questions = QuestionSerializer(many=True)

    class Meta:
        model = Quiz
        fields = ['id', 'title', 'teacher', 'course', 'questions', 'created_at']


class StudentQuizResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentQuizResult
        fields = ['id', 'student', 'quiz', 'score', 'feedback', 'completed_at']

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = "__all__"  # Include all fields in the API