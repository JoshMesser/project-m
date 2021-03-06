import Ember from 'ember';

const {
  inject: { service }
} = Ember;

export default Ember.Route.extend({
  session: service(),
  // audio: service(),

  beforeModel() {
    return this.get('session').fetch().catch(() => {});
  },

  /*
  initAudioFile: on('init', function() {
    const audio = this.get('audio');

    audio.load('/sounds/19. Character Select.mp3').asSound('background-track');
    audio.load('/sounds/Announcer - Title (USA).wav').asSound('startup-music');
  }),

  afterModel() {
    const audio = this.get('audio');
    const startup = audio.getSound('startup-music');
    const background = audio.getSound('background-track');

    if ( startup ) {
      startup.play();
    }

    Ember.run.later(() => {
      if ( background ) {
        background.play();
      }
    }, 5000);
  },
  */

  actions: {

    openSideNav() {
      this.controller.set('sideNavOpen', true);
    },

    signIn( provider ) {
      this.get('session').open('firebase', { provider }).then(() => {}).catch(() => {
        alert('Failed to create a new session.');
      });
    },

    signOut() {
      this.get('session').close();
    },

    transition(route) {
      this.transitionTo(route);
    }

  }
});
