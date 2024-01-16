export const categories = [
 { id: '1', name: 'Technologie'},
 { id: '2', name: 'Science'},
 { id: '3', name: 'Cuisine'},
];

export const articles = {
 '1': [
 { id: '1', title: 'Nouvelles Technologies', content: 'Contenu de l\'article sur les nouvelles technologies.' },
 { id: '2', title: 'Introduction à React Native', content: 'Contenu de l\'article sur React Native.' },
 ],
 '2': [
 { id: '3', title: 'Découvertes Scientifiques', content: 'Contenu de l\'article sur les découvertes scientifiques.' },
 // Ajoutez d'autres articles de la catégorie Science si nécessaire
 ],
'3': [
 { id: '4', title: 'Recettes Faciles', content: 'Contenu de l\'article sur les recettes faciles.' },
 // Ajoutez d'autres articles de la catégorie Cuisine si nécessaire
 ],
};

export default {categories, articles}