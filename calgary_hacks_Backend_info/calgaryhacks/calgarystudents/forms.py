from django import forms

class CreateNewList(forms.Form):
	name = forms.CharField(label="UserName",max_length=400)
	ucid = forms.CharField(label="UCID",max_length=7)
	check = forms.BooleanField(required=False)

