from django.shortcuts import render

def home(request):
    context = {
        'info': 'Информация',
    }
    return render(request, 'index.html', context)

def lesson(request):
    context = {
        'info': 'Информация',
    }
    return render(request, 'lesson.html', context)
