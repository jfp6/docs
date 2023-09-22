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
sudo apt install gfortran-7
echo "export OMP_NUM_THREADS=4" >> ~/.bashrc
echo "alias ccx221='~/CalculiX/ccx_2.21/src/ccx_2.21'"
```

[Modified from this source.](https://carlomonjaraztec.wordpress.com/)
