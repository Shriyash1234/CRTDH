import pandas as pd

# Load the Excel file
excel_file = pd.read_excel(r'src\components\Assests\data\CRTDH-Equipments.xlsx')

# Convert the data to a JSON format
json_data = excel_file.to_json(orient='records')

# Save the JSON data to a file
with open('output.json', 'w') as json_file:
    json_file.write(json_data)
