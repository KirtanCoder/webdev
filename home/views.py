from django.shortcuts import render, HttpResponse
from home.models import Contact

# Create your views here.
def index(request):
    context = {
        "variable":"this is sent"
    }
    return render(request, 'index.html')
    return HttpResponse("This is a homepage")

def about(request):
    return render(request, 'about.html')
    return HttpResponse("This is a about page")

def services(request):
    return render(request, 'services.html')
    return HttpResponse("This is a service page")

def contact(request):
    if request.method == "POST":
        email = request.POST.get('email')
        name = request.POST.get('name')
        
        contact = Contact(email = email, name=name )
        contact.save()
    return render(request, 'contact.html')
    return HttpResponse("This is a contact page")