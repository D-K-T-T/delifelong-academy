from django.db import models

# Create your models here.

#Teacher Model
class Teacher(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    phone_no= models.CharField(max_length=15)
    address=models.TextField()
    class Meta:
        verbose_name_plural="1. Teachers"


#Course Category
class CourseCategory(models.Model):
    title=models.CharField(max_length=150)
    description=models.TextField()
    class Meta:
        verbose_name_plural="2. Course Categories"

#Course Category

# Course is linked to both a category and a teacher since each course 
# belongs to a specific category and is taught by a specific teacher
class Course(models.Model):
    category=models.ForeignKey(CourseCategory,on_delete=models.CASCADE)
    teacher=models.ForeignKey(Teacher,on_delete=models.CASCADE)
    title=models.CharField(max_length=150)
    description=models.TextField()
    class Meta:
        verbose_name_plural="3. Courses"

#Student Mode;
class Student(models.Model):
    full_name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    password=models.CharField(max_length=100)
    qualification=models.CharField(max_length=100)
    phone_no= models.CharField(max_length=15)
    address=models.TextField()
    interested_categories=models.TextField()
    class Meta:
        verbose_name_plural="4. Students"
   
