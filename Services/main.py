# # from bs4 import BeautifulSoup
# # import pandas as pd

# # # Function to extract service information
# # def extract_service_info(html_content):
# #     soup = BeautifulSoup(html_content, 'html.parser')
# #     services = []

# #     # Extract each service section
# #     service_sections = soup.find_all('li', class_='service')
# #     for service in service_sections:
# #         service_info = {}
# #         service_info['Category'] = service.find('h3', class_='subheadline').text.strip()

# #         table = service.find('table')
# #         if table:
# #             rows = table.find_all('tr')
# #             headers = [header.text.strip() for header in rows[0].find_all('th')]
# #             data = []
# #             for row in rows[1:]:
# #                 values = [val.text.strip() for val in row.find_all('td')]
# #                 data.append(dict(zip(headers, values)))
# #             service_info['Data'] = data
        
# #         services.append(service_info)
    
# #     return services

# # # Read the HTML file
# # file_path = 'C:\\Users\\nikhil deshmukh\\Downloads\\public_html\\Services\\shamshadad.html'  # Replace with the path to your HTML file
# # with open(file_path, 'r', encoding='utf-8') as file:
# #     html_content = file.read()

# # # Extract information
# # services_info = extract_service_info(html_content)

# # # Prepare data for DataFrame
# # all_data = []
# # for service in services_info:
# #     category = service['Category']
# #     for entry in service['Data']:
# #         entry['Category'] = category
# #         all_data.append(entry)

# # # Create a DataFrame
# # df = pd.DataFrame(all_data)

# # # Save to Excel
# # excel_file_path = 'services_info.xlsx'
# # df.to_excel(excel_file_path, index=False)

# # # Save to CSV
# # csv_file_path = 'services_info.csv'
# # df.to_csv(csv_file_path, index=False)

# # print(f"Data saved to {excel_file_path} and {csv_file_path}")

# import pandas as pd

# # Specify the correct encoding (e.g., 'latin1', 'utf-16') based on your CSV file's actual encoding
# data = pd.read_csv('C:\\Users\\nikhil deshmukh\\Downloads\\public_html\\Services\\services_info.csv', encoding='latin1')

# # Extract unique values from the 'Category' column
# services = data['area'].unique()

# # Generate HTML <option> tags
# for s in services:
#     print(f"<option value='{s}'>{s}</option>")



import csv
from geopy.geocoders import ArcGIS
import pandas as pd

# Read addresses from a DataFrame (assuming 'services_info.csv' contains addresses in 'address' column)
data = pd.read_csv('C:\\Users\\nikhil deshmukh\\Downloads\\public_html\\Services\\services_info.csv', encoding='latin1')
addresses = data['Address'].tolist()

nom = ArcGIS()

results = []

for address in addresses:
    try:
        location = nom.geocode(address, timeout=10)
        if location:
            results.append({
                'address': address,
                'latitude': location.latitude,
                'longitude': location.longitude
            })
        else:
            results.append({
                'address': address,
                'latitude': None,
                'longitude': None,
                'error': 'Address not found'
            })
    except Exception as e:
        results.append({
            'address': address,
            'latitude': None,
            'longitude': None,
            'error': str(e)
        })

# Save results to CSV
csv_file_path = 'geocoded_addresses.csv'

# Write results to CSV file
with open(csv_file_path, 'w', newline='', encoding='utf-8') as csvfile:
    fieldnames = ['address', 'latitude', 'longitude', 'error']
    writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
    writer.writeheader()
    for result in results:
        writer.writerow(result)

print(f"Geocoded addresses saved to {csv_file_path}")
