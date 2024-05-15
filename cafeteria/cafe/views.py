from django.shortcuts import render
from .models import Pizza, Burger

# Create your views here.

def index(request):
    return render(request, "cafe/index.html")

def pizza(request):
    pizzas = Pizza.objects.all()
    return render(request, "cafe/pizza.html" , {
        'pizzas' : pizzas
        })
    
def burger(request):
    burgers = Burger.objects.all()
    return render(request, "cafe/burger.html", {
        "burgers" : burgers
    })

def order(request):
    return render(request, "cafe/order.html")