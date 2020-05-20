from django.db import models
import datetime
from django import forms
from django.db import models
from django.urls import reverse
from django.utils import timezone
from django.forms import ModelForm

class Leads(models.Model):
    name = models.CharField(max_length = 200)
    email = models.CharField(max_length=200)
    message = models.TextField(max_length=1000)
    created_at=models.DateTimeField(auto_now_add=True)