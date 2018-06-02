const common = {
  article: {
    padding: 12
  },
  wiredIcon: {
    '--wired-icon-bg-color': '#fff'
  }
};

const home = {
  card: {
    width: '90%',
    padding: 12,
    background: '#fff'
  },
  cardSection: {
    padding: 12
  },
  date: {
    padding: 12
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sender: {
    display: 'flex',
    alignItems: 'center',
    padding: 8
  }
};

const loader = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: window.innerHeight,
    width: window.innerWidth
  }
};

export { common, home, loader };
