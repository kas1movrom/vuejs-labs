let counter = localStorage.getItem('pageLoadCount') || 0;

counter++;

localStorage.setItem('pageLoadCount', counter);
alert(counter);