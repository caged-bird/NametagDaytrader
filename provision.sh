#!/bin/bash

sudo yum -y install epel-release

# Install Node.js 7.x repository
curl -sL https://rpm.nodesource.com/setup_7.x | bash -
sudo yum -y install nodejs

# Install phantomjs
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
tar xfv phantomjs-2.1.1-linux-x86_64.tar.bz2 
sudo yum -y install fontconfig-devel
mv phantomjs-2.1.1-linux-x86_64/bin/phantomjs /usr/local/bin/

# disable firewall
sudo systemctl stop firewalld.service
sudo systemctl disable firewall.service


# adjust current time
sudo yum -y install ntp
sudo cp /etc/ntp.conf /etc/ntp.conf.org
sudo sed -i -e "s/server 0.centos.pool.ntp.org iburst/server -4 ntp.nict.jp/" /etc/ntp.conf
sudo sed -i -e "s/server 1.centos.pool.ntp.org iburst/server -4 ntp1.jst.mfeed.ad.jp/" /etc/ntp.conf
sudo sed -i -e "s/server 2.centos.pool.ntp.org iburst/server -4 ntp2.jst.mfeed.ad.jp/" /etc/ntp.conf
sudo sed -i -e "s/server 3.centos.pool.ntp.org iburst/server -4 ntp3.jst.mfeed.ad.jp/" /etc/ntp.conf
sudo systemctl start ntpd.service
sudo systemctl enable ntpd.service
sudo timedatectl set-timezone Asia/Tokyo

