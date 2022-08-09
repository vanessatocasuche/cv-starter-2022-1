import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';

export const SidebarDatos = [
  {
    title: 'Información General',
    path: '/informacionbasica',
    icon: <FaIcons.FaUserAlt />,
    cName: 'nav-text',
  },
  {
    title: 'Información Académica',
    path: '/informacionacademica',
    icon: <FaIcons.FaGraduationCap />,
    cName: 'nav-text',
  },
  {
    title: 'Información Laboral',
    path: '/informacionlaboral',
    icon: <FaIcons.FaUserCog />,
    cName: 'nav-text',
  },
  {
    title: 'Conocimientos e Intereses',
    path: '/conocimientoseintereses',
    icon: <BsIcons.BsCodeSlash />,
    cName: 'nav-text',
  },
  {
    title: 'Idiomas',
    path: '/idiomas',
    icon: <FaIcons.FaLanguage />,
    cName: 'nav-text',
  },
  {
    title: 'Cursos y certificaciones',
    path: '/cursosycertificaciones',
    icon: <FaIcons.FaCertificate />,
    cName: 'nav-text',
  },
  {
    title: 'Hobbies',
    path: '/hobbies',
    icon: <FaIcons.FaSkiingNordic />,
    cName: 'nav-text',
  },
];
