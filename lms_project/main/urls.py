from django.urls import path, include
from . import views 
from .views import ResourceViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'resources', ResourceViewSet) 


urlpatterns=[
#maps to the TeacherList view, handling GET and POST requests for the /teacher/ endpoint.
 path('teacher/',views.TeacherList.as_view()),
 path('', include(router.urls)),

#maps to the TeacherDetail view, handling GET, PUT, PATCH, and DELETE requests for a specific teacher based on their primary key (pk).
 path('teacher/<int:pk>/',views.TeacherDetail.as_view())]