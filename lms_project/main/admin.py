from django.contrib import admin
from . import models
from .models import Quiz,  Question, Resource,Course

admin.site.register(models.Teacher)
admin.site.register(models.CourseCategory)
admin.site.register(models.Course)
admin.site.register(models.Student)

# # Register your models here.
# class QuizAdmin(admin.ModelAdmin):
#     list_display = ('title', 'teacher', 'course', 'created_at')

# class QuestionAdmin(admin.ModelAdmin):
#     list_display = ('text', 'course', 'difficulty')

# admin.site.register(Quiz, QuizAdmin)
# admin.site.register(Question, QuestionAdmin)


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    list_display = ("text", "course", "difficulty")
    list_filter = ("course", "difficulty")

@admin.register(Quiz)
class QuizAdmin(admin.ModelAdmin):
    list_display = ("title", "teacher", "course", "created_at")
    filter_horizontal = ("questions",)  # Makes ManyToMany selection easier

@admin.register(Resource)
class ResourceAdmin(admin.ModelAdmin):
    list_display = ("title", "resource_type", "visibility")
    search_fields = ("title", "tags")
    filter_horizontal = ("courses",)  # This works because 'courses' is defined on Resource


class CourseAdmin(admin.ModelAdmin):
    list_display = ("title", "category", "teacher")
    search_fields = ("title", "category")
    # No filter_horizontal for reverse relation here