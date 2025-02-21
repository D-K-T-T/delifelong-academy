"""
URL configuration for lms_project project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include 
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
from main.views import TeacherRegisterView,StudentRegisterView,  TeacherLoginView, StudentLoginView, LoginView, LogoutView, AuthStatusView
 

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/',include('main.urls')),
    path('api-auth/',include('rest_framework.urls')),
    path('api/auth/teacher-register/', TeacherRegisterView.as_view(), name='teacher-register'),
    path('api/auth/student-register/', StudentRegisterView.as_view(), name='user-register'),
    path('api/auth/teacher-login/', TeacherLoginView.as_view(), name="teacher-login"),
    path('api/auth/student-login/', StudentLoginView.as_view(), name="user-login"),
    path('api/auth/login/', LoginView.as_view(), name='login'),
    path('api/auth/logout/', LogoutView.as_view(), name='logout'),
    path('api/auth/status/', AuthStatusView.as_view(), name="auth-status"),
    path('', TemplateView.as_view(template_name='index.html'), name='home'),


   

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)


# from django.contrib import admin
# from django.urls import path, include, re_path
# from django.views.generic import TemplateView
# from django.conf import settings
# from django.conf.urls.static import static
# from main.views import (
#     TeacherRegisterView, 
#     StudentRegisterView,
#     TeacherLoginView, 
#     StudentLoginView, 
#     LoginView, 
#     LogoutView, 
#     AuthStatusView
# )

# # API URL patterns
# api_patterns = [
#     path('auth/', include([
#         path('teacher-register/', TeacherRegisterView.as_view(), name='teacher-register'),
#         path('student-register/', StudentRegisterView.as_view(), name='user-register'),
#         path('teacher-login/', TeacherLoginView.as_view(), name='teacher-login'),
#         path('student-login/', StudentLoginView.as_view(), name='user-login'),
#         path('login/', LoginView.as_view(), name='login'),
#         path('logout/', LogoutView.as_view(), name='logout'),
#         path('status/', AuthStatusView.as_view(), name='auth-status'),
#     ])),
#     path('', include('main.urls')),  # Other API endpoints
# ]

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/', include(api_patterns)),
#     path('api-auth/', include('rest_framework.urls')),
#     # Catch all routes and serve React app
#     re_path(r'^.*', TemplateView.as_view(template_name='index.html'), name='home'),
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)