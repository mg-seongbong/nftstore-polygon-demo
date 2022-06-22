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
 
> ### ipfs server start
- (ipfs port : 5001, ipfs file prt : 8080)
```
$ ipfs daemon
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

> ### truffle 설치
```
# npm install -g truffle --unsafe-perm
# truffle version
```
