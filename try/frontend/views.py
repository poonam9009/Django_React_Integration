from django.shortcuts import render
from django.http import HttpResponse

# def index(request):
#     return HttpResponse("Hello, Django!")

def index(request):
    return render(request, 'frontend/index.html')