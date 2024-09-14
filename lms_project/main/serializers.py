from rest_framework import serializers
from . import models

# convert complex Teacher model instances into Python data types, which can then be easily rendered into JSON.
class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields=['full_name','email','password','qualification','phone_no','address'] 