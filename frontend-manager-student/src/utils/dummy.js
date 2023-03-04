/**
 * @author Nguyễn Tiến Tài
 * @created_at 04/03/2023
 * @descriptionKey Nav Info
 */
export const navInfo = [
  {
    displayText: 'Giới thiệu',
    path: '/',
    submenu: [
      {
        displayText: 'Submenu 1',
        path: '/sub',
      },
      {
        displayText: 'Submenu 1',
        path: '/sub',
      },
      {
        displayText: 'Submenu 1',
        path: '/sub',
      },
    ],
  },
  {
    displayText: 'Tra cứu',
    path: '/book',
    submenu: [
      {
        displayText: 'Thể loại',
        path: '/category',
      },
      {
        displayText: 'Tất cả tài liệu',
        path: '/book',
      },
      {
        displayText: 'Submenu 1',
        path: '/sub',
      },
    ],
  },
  {
    displayText: 'Phụ kiện',
    path: '/accessories',
  },
  {
    displayText: 'Liên hệ',
    path: '/contact',
  },
];
