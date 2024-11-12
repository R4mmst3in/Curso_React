  const techDom = (params) => {
    const div = document.createElement('div');
    div.className = 'tech';
    const img = document.createElement('img');
    img.src = `https://logo.clearbits.com/${params.url}`;
    const span = document.createElement('span');
    const text = document.createTextNode(params.name);


    div.appendChild(img);
    div.appendChild(span);
    span.appendChild(text);

    return div;
  };

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
  

THECHNOLOGIES.forEach((techParam) =>
  document.body.appendChild(techDom(techParam))
);
