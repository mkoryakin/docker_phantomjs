# -*- mode: ruby -*-
# vi: set ft=ruby :

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  config.vm.define "docker" do |docker|
    docker.vm.box = "vektra/trusty64-min"
    docker.vm.hostname = "docker.example.com"
    docker.vm.provision :shell, :path => "bootstrap_docker.sh"
    docker.vm.network "private_network", ip: "192.168.33.10"
    docker.ssh.forward_agent = true

    docker.vm.provider "virtualbox" do |vb|
      vb.customize ["modifyvm", :id, "--memory", "1024"]
    end

    config.vm.provision "docker",
      images: ["ubuntu"]

  end
end