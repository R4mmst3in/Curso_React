const techReact = (params) =>
  React.createElement('div', {
    className: 'tech'},
    [
      React.createElement('img', {
        src: `https://logo.clearbits.com/${params.url}`,
      }),
      React.createElement('span',
        null,
        params.name
      ),
    ]
  );

const THECHNOLOGIES = [
  {
    url: 'https://logo.clearbit.com/reactjs.org',
    name: 'React JS'
  },
  { 
    url: 'https://logo.clearbit.com/nodejs.org',
    name: 'Node JS'
  },
  { 
    url: 'https://logo.clearbit.com/reactjs.org',
    name: 'GraphQl'
  },
  { 
    url: 'https://logo.clearbit.com/oracle.org',
    name: 'Oracle'
  },
];


ReactDOM.render(techReact(THECHNOLOGIES[0]), document.body);