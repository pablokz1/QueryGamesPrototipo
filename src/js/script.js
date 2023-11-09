const toggleButton = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
toggleButton.addEventListener('click', function () {
  sidebar.classList.toggle('active');
  if (sidebar.classList.contains('active')) {
    sidebar.style.left = '0px';
    sidebar.querySelector('.toggle-btn span:nth-child(1)').style.top = '50%';
    sidebar.querySelector('.toggle-btn span:nth-child(1)').style.transform = 'translateY(-50%) rotate(45deg)';
    sidebar.querySelector('.toggle-btn span:nth-child(2)').style.display = 'none';
    sidebar.querySelector('.toggle-btn span:nth-child(3)').style.top = '50%';
    sidebar.querySelector('.toggle-btn span:nth-child(3)').style.transform = 'translateY(-50%) rotate(-45deg)';
  } else {
    sidebar.style.left = '-250px';
    sidebar.querySelector('.toggle-btn span:nth-child(1)').style.top = '10%';
    sidebar.querySelector('.toggle-btn span:nth-child(1)').style.transform = 'translateY(-50%) rotate(0deg)';
    sidebar.querySelector('.toggle-btn span:nth-child(2)').style.display = 'block';
    sidebar.querySelector('.toggle-btn span:nth-child(3)').style.top = '90%';
    sidebar.querySelector('.toggle-btn span:nth-child(3)').style.transform = 'translateY(-50%) rotate(0deg)';
  }
});