import {inject, Injectable} from '@angular/core';
//import {NgxIndexedDBService} from 'ngx-indexed-db'
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect
} from '@angular/fire/auth';
import {
  Firestore,
  collection,
  doc,
  docData,
  getDoc,
  setDoc,
  updateDoc
} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private auth: Auth = inject(Auth);
  private fs: Firestore = inject(Firestore);
  private usersCol = collection(this.fs, 'users');
  //private dbService:NgxIndexedDBService = inject(NgxIndexedDBService);

  constructor() {}

  /*
  async addScrollIDB(scroll:{
    name: string,
    icon: string,
    position: {
      x: number,
      y: number
    }
  }){
    return this.dbService.add('scrolls', scroll);
  };

  getAllScrollsIDB() {
    return this.dbService.getAll('scrolls');
  }

   */


  async signup(name:string, gmail: string, password: string): Promise<any> {
    try {
      const userCreds = await createUserWithEmailAndPassword(this.auth, gmail, password);
      const fbUser = userCreds.user;

      const newUser = {
        name: name,
        email: gmail,
        role:
          fbUser.email === 'billcipher439@gmail.com' ||
          fbUser.email === 'admin1@admin.admin' ?
            'admin' :
            'user',
        date: new Date(),
        desks: []
      }
      await setDoc(doc(this.usersCol, fbUser.uid), newUser);
      return fbUser;
    } catch (e) {
      console.error("Signup error:" + e);
      return null;
    }
  }

  async login(gmail: string, password: string): Promise<any> {
    try {
      const userCreds = await signInWithEmailAndPassword(this.auth, gmail, password);
      const fbUser = userCreds.user;
      return fbUser;
    } catch (e) {
      console.error("Login error:" + e);
      return null;
    }
  }


}
