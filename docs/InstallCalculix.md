---
layout: default
title: Calculix
nav_order: 20
---

# How to Install Calculix in Ubuntu 20.04 on WSL
```
wget http://www.dhondt.de/ccx_2.21.tar.bz2
bunzip2 ccx_2.21.tar.bz2
tar -xvf ccx_2.21.tar
sudo apt-get install aptitude
sudo add-apt-repository ppa:ubuntu-toolchain-r/test
sudo apt update
sudo aptitude install gcc-7 g++-7 gfortran-7
echo "export OMP_NUM_THREADS=4" >> ~/.bashrc
echo "alias ccx221='~/CalculiX/ccx_2.21/src/ccx_2.21'" >> ~/.bashrc
```

[Modified from this source.](https://carlomonjaraztec.wordpress.com/)
[and this source.](https://askubuntu.com/questions/949308/how-do-i-install-gfortran-7)

<div id="text-cleaner-app">
  <textarea
    id="inputText"
    rows="8"
    style="width:100%;"
    placeholder="Type or paste text here..."
  ></textarea>

  <br><br>

  <textarea
    id="outputText"
    rows="8"
    style="width:100%;"
    placeholder="Cleaned text appears here..."
    readonly
  ></textarea>
</div>

{% include text-cleaner.html %}
