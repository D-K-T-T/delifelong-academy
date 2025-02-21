from django.contrib.auth.backends import ModelBackend
from django.contrib.auth import get_user_model
from django.db.models import Q

User = get_user_model()

class EmailBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            # Check if the input is an email or username
            user = User.objects.get(Q(username=username) | Q(email=username))
            if user.check_password(password):
                return user
            return None
        except User.DoesNotExist:
            return None