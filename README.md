# nftstore-polygon-demo
폴리곤 네트워크 기반 nft store 데모서버

---

## 서버 설치방법
> ### node server 설치
```
$ git clone https://github.com/mg-seongbong/nftstore-polygon-demo.git
$ cd nftstore-polygon-demo
$ npm install
```
> ### ipfs server 설치
- 참고 : https://docs.ipfs.io/install/command-line/#official-distributions
```
$ wget https://dist.ipfs.io/go-ipfs/v0.10.0/go-ipfs_v0.10.0_linux-amd64.tar.gz --no-check-certificate
$ tar -xvzf go-ipfs_v0.10.0_linux-amd64.tar.gz
$ cd go-ipfs
$ ./install.sh 
$ ipfs --version
$ ipfs init
```

## 서버 실행방법
> ### node server 실행 (port : 5500)
```
$ npm run dev
```
- 브라우져 확인 : http://localhost:5500/ 
- <img width="1605" alt="image" src="https://user-images.githubusercontent.com/108014009/175096629-1f72bef3-3fc4-482d-a8de-6c1ccee734dd.png">

 
> ### ipfs server start
- (ipfs port : 5001, ipfs file prt : 8080)
```
$ ipfs daemon
Initializing daemon...
go-ipfs version: 0.10.0
Repo version: 11
System version: amd64/linux
Golang version: go1.16.8
2022/06/23 02:05:26 failed to sufficiently increase receive buffer size (was: 208 kiB, wanted: 2048 kiB, got: 416 kiB). See https://github.com/lucas-clemente/quic-go/wiki/UDP-Receive-Buffer-Size for details.
Swarm listening on /ip4/127.0.0.1/tcp/4001
Swarm listening on /ip4/127.0.0.1/udp/4001/quic
Swarm listening on /ip4/172.18.0.2/tcp/4001
Swarm listening on /ip4/172.18.0.2/udp/4001/quic
Swarm listening on /p2p-circuit
Swarm announcing /ip4/127.0.0.1/tcp/4001
Swarm announcing /ip4/127.0.0.1/udp/4001/quic
Swarm announcing /ip4/172.18.0.2/tcp/4001
Swarm announcing /ip4/172.18.0.2/udp/4001/quic
Swarm announcing /ip4/221.163.222.32/udp/49256/quic
API server listening on /ip4/127.0.0.1/tcp/5001
WebUI: http://127.0.0.1:5001/webui
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready
```

## 기타 라이브러리 설치
> ### python3 설치
```
# yum install -y python3
# yum groupinstall -y Development Tools
# update-alternatives --config python
# update-alternatives --install /bin/python python /bin/python2.7 1
# update-alternatives --install /bin/python python /bin/python3.6 2
# update-alternatives --config python
# update-alternatives --config python
# ln -s /bin/pip3.6 /bin/pip 
# python3 --version
Python 3.6.8
# pip --version
pip 9.0.3 from /usr/lib/python3.6/site-packages (python 3.6)
```

> ### nvm을 이용한 node 설치
```
# curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
# source /root/.bashrc
# nvm install lts/fermium
# nvm use lts/fermium
# nvm alias default lts/fermium
# node --version
v14.19.2
# npm --version
6.14.17
```
