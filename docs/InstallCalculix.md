---
layout: default
title: Install Calculix in Ubuntu on WSL
nav_order: 20
---

# How to Install Calculix in Ubuntu on WSL
```
wget http://www.dhondt.de/ccx_2.21.tar.bz2
bunzip2 ccx_2.21.tar.bz2
tar -xvf ccx_2.21.tar
sudo apt install gfortran-7
echo "export OMP_NUM_THREADS=4" >> ~/.bashrc
```

[Modified from this source.](https://carlomonjaraztec.wordpress.com/)
