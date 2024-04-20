  window.addEventListener('mousemove', function(e) {
    var arr = [1, 0.9, 0.8, 0.5, 0.2];

    arr.forEach(function(i) {
      var x = (1 - i) * 75;
      var star = document.createElement('div');

      star.className = 'star';
      star.style.top = e.pageY + Math.round(Math.random() * x - x / 2) + 'px';
      star.style.left = e.pageX + Math.round(Math.random() * x - x / 2) + 'px';

      document.body.appendChild(star);

      window.setTimeout(function() {
        document.body.removeChild(star);
      }, Math.round(Math.random() * i * 600));
    });
  }, false);

  

  document.getElementById('type').addEventListener('change', function() {
    var bookFields = document.getElementById('bookFields');
    var poetryFields = document.getElementById('poetryFields');
    if (this.value === 'book') {
      bookFields.style.display = 'block';
      poetryFields.style.display = 'none';
    } else if (this.value === 'poetry') {
      bookFields.style.display = 'none';
      poetryFields.style.display = 'block';
    }
  });

  document.getElementById('publishForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var type = document.getElementById('type').value;
    var isValid = true;

    if (type === 'book') {
      var email = document.getElementById('email').value;
      var pages = document.getElementById('pages').value;
      var pdf = document.getElementById('pdf').value;

      if (!email || !pages || !pdf) {
        alert('Please fill in all the required fields.');
        isValid = false;
      }
    } else if (type === 'poetry') {
      var poetryPdf = document.getElementById('poetryPdf').value;
      if (!poetryPdf) {
        alert('Please upload your poetry PDF.');
        isValid = false;
      }
    }

    if (isValid) {
      if (type === 'book') {
        alert('Our experts are verifying your book. If confirmed, you will receive a mail.');
      } else if (type === 'poetry') {
        alert('Successful submission! Our experts will verify and get back to you shortly.');
      }
    }
  });

  document.querySelector('.search-button').addEventListener('click', function() {
    var searchInput = document.getElementById('searchInput').value;
    alert('Searching for: ' + searchInput);
  });

  document.querySelector('.filter-button').addEventListener('click', function() {
    var filterBy = document.getElementById('filterBy').value;
    var filterInput = document.getElementById('searchInput').value.toLowerCase();

    var cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
      var cardText = card.textContent.toLowerCase();
      if (filterBy === 'author' && cardText.includes(filterInput)) {
        card.style.display = 'block';
      } else if (filterBy === 'type' && cardText.includes(filterInput)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });

  function publish() {
    var content = document.getElementById("writingContent").value.trim();
    var wordCount = content.split(/\s+/).length;

    if (content === "" || wordCount < 50) {
      alert("Your work cannot be published. Please make sure the content is not empty and contains at least 50 words.");
    } else {
      alert("Your work has been published! Check the Read section.");
      document.getElementById("Write").style.display = "block";
      document.getElementById("writingArea").style.display = "none";
    }
  }

  function clearAll() {
    document.getElementById("writingContent").value = "";
  }

  function startWriting() {
    document.getElementById("writingArea").style.display = "block";
    document.getElementById("Home").style.display = "none";
    document.getElementById("Read").style.display = "none";
    document.getElementById("Publish").style.display = "none";
    var tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}
function setDefaultTab() {
        var currentTab = localStorage.getItem('currentTab');
        if (currentTab) {
            openCity(event, currentTab);
        } else {
            document.querySelector('.tablinks').click();
        }
    }

    function openCity(event, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    event.currentTarget.className += " active";
    localStorage.setItem('currentTab', cityName);
    if (cityName === "Home" || cityName === "Publish") {
        document.getElementById("mainFooter").classList.add("fixed-footer");
    } else {
        document.getElementById("mainFooter").classList.remove("fixed-footer");
    }
}

