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

class Question(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    text = models.TextField()
    difficulty = models.CharField(max_length=50)  # easy, medium, hard
    answer = models.TextField(default="N/A")  


    class Meta:
        verbose_name_plural = "5. Questions"


class Quiz(models.Model):
    title = models.CharField(max_length=150)
    teacher = models.ForeignKey(Teacher, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    questions = models.ManyToManyField(Question)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "6. Quizzes"


class StudentQuizResult(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.DecimalField(max_digits=5, decimal_places=2)
    feedback = models.TextField(blank=True)  # Adaptive AI or teacher feedback
    completed_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = "7. Student Quiz Results"



class Resource(models.Model):

    RESOURCE_TYPES = [
        ("video", "Video"),
        ("article", "Article"),
        ("quiz", "Quiz"),
        ("assignment", "Assignment"),
    ]

    VISIBILITY_OPTIONS = [
        ("private", "Private"),
        ("assigned", "Assigned"),
    ]
    title = models.CharField(max_length=255)  # Title of the resource
    description = models.TextField()  # Detailed description
    level = models.CharField(max_length=50, choices=[("Beginner", "Beginner"), ("Intermediate", "Intermediate"), ("Advanced", "Advanced")])  # Difficulty level
    content_url = models.URLField()  # URL pointing to the resource content
    tags = models.CharField(max_length=255, blank=True)  # Optional tags for categorization (comma-separated)
    created_at = models.DateTimeField(auto_now_add=True)  # Timestamp for when the resource was added
    updated_at = models.DateTimeField(auto_now=True)  # Timestamp for last modification
    resource_type = models.CharField(max_length=20, choices=RESOURCE_TYPES, default="article")
    is_completed = models.BooleanField(default=False)
    visibility = models.CharField(max_length=10, choices=VISIBILITY_OPTIONS, default="private")
    courses = models.ManyToManyField('Course', related_name="resources") 

    # def __str__(self):
    #     return self.title
    class Meta:
        verbose_name_plural = "7. Resources"
    

   
class StudentProgress(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    resource = models.ForeignKey(Resource, on_delete=models.CASCADE)
    is_completed = models.BooleanField(default=False)
    score = models.FloatField(null=True, blank=True)  # Store quiz scores if applicable
    assigned_by_teacher = models.BooleanField(default=False)  # If manually assigned
    progress = models.DecimalField(max_digits=5, decimal_places=2, default=0.0)  # Percentage completion
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.student.full_name} - {self.resource.title}"


    # class Meta:
    #     verbose_name_plural = "Student Progress"