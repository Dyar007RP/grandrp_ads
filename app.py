from flask import Flask, render_template, request, jsonify
import csv
import os

GrandRP = Flask(__name__, static_folder='static')

@GrandRP.route('/')
def index():
    return render_template('index.html')

@GrandRP.route('/auto')
def auto():
    return render_template('auto.html')

# Fetch car names from CSV
@GrandRP.route('/get-car-names', methods=['POST'])
def get_car_names():
    car_names = []
    csv_file_path = r'C:\Users\diyar\Downloads\ff\ff\grandrp_ads\static\auto\Vehicle names\Car.csv'

    if not os.path.exists(csv_file_path):
        return jsonify({"error": "CSV file not found"}), 404

    try:
        with open(csv_file_path, mode='r', encoding='utf-8') as file:
            csv_reader = csv.reader(file)
            for row in csv_reader:
                if row:  # Ensure it's not an empty row
                    car_names.append(row[0].strip())  # Take only the first column

        print("Car names loaded:", car_names)  # Debugging: Print car names in terminal

        return jsonify({"cars": car_names})  # Return JSON to frontend

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@GrandRP.route('/categories')
def categories():
    return render_template('categories.html')

@GrandRP.route('/house_and_apartments')
def house_and_apartments():
    return render_template('house_and_apartments.html')

@GrandRP.route('/business')
def business():
    return render_template('business.html')


@GrandRP.route('/date_or_meetings')
def date_or_meetings():
    return render_template('date_or_meetings.html')

@GrandRP.route('/work')
def work():
    return render_template('work.html')

@GrandRP.route('/others')
def others():
    return render_template('others.html')


if __name__ == '__main__':
    GrandRP.run(debug=True)
