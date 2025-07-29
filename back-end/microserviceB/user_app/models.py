from django.db import models
from django.contrib.auth.models import AbstractUser



class User(AbstractUser):
  email = models.EmailField(
    max_length=150,
    unique=True,
  )
  
  first_name = models.CharField(
    max_length=50,
    unique=False,
    null=False
  )

  last_name = models.CharField(
    max_length=50,
    unique=False,
    null=False
  )

  USERNAME_FIELD = "email"
  REQUIRED_FIELDS = []
  