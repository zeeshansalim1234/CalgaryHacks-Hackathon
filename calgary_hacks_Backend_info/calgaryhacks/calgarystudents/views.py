from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from .models import ToDoList,Item
from .forms import CreateNewList
# Create your views here.

def index(response, id):
	ls=ToDoList.objects.get(id=id)
	return render(response,"calgarystudents/list.html",{"ls":ls})


def home(response):
	return render(response,"calgarystudents/frontend.html",{})

# def reg(request):
# 	form=UserCreationForm()
# 	context={'form':form}
# 	return render(request,"calgarystudents/reg.html",context)

def create(response):
	if response.method == "POST" :
		form = CreateNewList(response.POST)

		if form.is_valid():
			n=form.cleaned_data["name"]# u=form.cleaned_data["ucid"]
			t=ToDoList(name=n)
			t.save()
		# return HttpResponseRedirect("/%i" %t.id)

	else:
		form=CreateNewList()
 
	return render(response,"calgarystudents/create.html",{"form":form})






