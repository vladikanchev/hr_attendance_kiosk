{
    'name': 'HR Attendance Kiosk Limit Override (Fixed)',
    'version': '1.0',
    'summary': 'Overrides kiosk attendance behavior with limits and voice feedback',
    'category': 'Human Resources',
    'author': 'Твоето име или фирма',
    'depends': ['hr_attendance_kiosk', 'web'],
    'data': [
        # тук добави другите xml файлове, ако имаш
    ],
    'assets': {
        'web.assets_backend': [
            'hr_attendance_kiosk_limit_override_fixed/static/src/js/kiosk_override.js',
        ],
    },
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
}
