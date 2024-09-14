from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics
from .serializers import TeacherSerializer
from . import models




#Create your views here.
#generics.ListCreateAPIView for GET and POST requests
class TeacherList(generics.ListCreateAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer
       
#generics.RetrieveUpdateDestroyAPIView for GET,PUT AND DELETE 
class TeacherDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=models.Teacher.objects.all()
    serializer_class=TeacherSerializer



