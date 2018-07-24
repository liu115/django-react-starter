from django.shortcuts import render, reverse
from django.http import HttpResponse
# Create your views here.

def index(request):
    string = 'hello '
    string += reverse('api:index')
    return HttpResponse(string)