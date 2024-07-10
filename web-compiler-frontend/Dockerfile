# Pobierz obraz Node.js jako bazowy
FROM node:14-alpine

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Skopiuj plik package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików projektu
COPY .. .

# Zbuduj aplikację
RUN npm run build

# Instalujemy serwer statyczny aby serwować build
RUN npm install -g serve

# Ustaw port na 3000
EXPOSE 3000

# Uruchom serwer aby serwować build
CMD ["serve", "-s", "build", "-l", "3000"]
