from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        full_name = request.form.get('full_name')
        region = request.form.get('region')
        city = request.form.get('city')
        street = request.form.get('street')
        house = request.form.get('house')
        apartment = request.form.get('apartment')
        document1 = request.form.get('document1')
        document2 = request.form.get('document2')
        agreement = request.form.get('agreement')
        
        return f'Ваши данные:<br>' \
               f'Фамилия имя отчество: {full_name}<br>' \
               f'Регион: {region}<br>' \
               f'Город: {city}<br>' \
               f'Улица: {street}<br>' \
               f'Дом: {house}<br>' \
               f'Квартира: {apartment}<br>' \
               f'Первый документ: {document1}<br>' \
               f'Второй документ: {document2}<br>' \
               f'Согласие: {agreement}'
    
    return render_template('PodpDogov.html')

if __name__ == '__main__':
    app.run()