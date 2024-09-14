from django.urls import path
from . import views 
urlpatterns=[
#maps to the TeacherList view, handling GET and POST requests for the /teacher/ endpoint.
 path('teacher/',views.TeacherList.as_view()),

#maps to the TeacherDetail view, handling GET, PUT, PATCH, and DELETE requests for a specific teacher based on their primary key (pk).
 path('teacher/<int:pk>/',views.TeacherDetail.as_view())]