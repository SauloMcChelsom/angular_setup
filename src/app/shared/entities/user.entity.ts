export class UserEntity {
  private id: number;
  private uid: String;
  private email: String;
  private name: String;
  private password: String;
  private providers: String;
  private last_login: String;
  private is_active: boolean;
  private updated_at: String;
  private timestamp: String;
  private role: Role;

  constructor(user:IUser){

	this.id = user.id
	this.uid = user.uid
	this.email = user.email
	this.name = user.name
	this.password = user.password
	this.providers = user.providers
	this.last_login = user.last_login
	this.is_active = user.is_active
	this.updated_at = user.updated_at
	this.timestamp = user.timestamp
	this.role = user.role
  }
  	public getId(): number {
		return this.id;
	}

	public setId(value: number) {
		this.id = value;
	}

	public getUid(): String {
		return this.uid;
	}

	public setUid(value: String) {
		this.uid = value;
	}

	public getEmail(): String {
		return this.email;
	}

	public setEmail(value: String) {
		this.email = value;
	}

	public getName(): String {
		return this.name;
	}

	public setName(value: String) {
		this.name = value;
	}

	public getPassword(): String {
		return this.password;
	}

	public setPassword(value: String) {
		this.password = value;
	}

	public getProviders(): String {
		return this.providers;
	}

	public setProviders(value: String) {
		this.providers = value;
	}

	public getLastLogin(): String {
		return this.last_login;
	}

	public setLastLogin(value: String) {
		this.last_login = value;
	}

  	public getIsActive(): boolean {
		return this.is_active;
	}

	public setIsActive(value: boolean) {
		this.is_active = value;
	}

  	public getUpdatedAt(): String {
		return this.updated_at;
	}

	public setUpdatedAt(value: String) {
		this.updated_at = value;
	}

  	public getTimestamp(): String {
		return this.timestamp;
	}

	public setTimestamp(value: String) {
		this.timestamp = value;
	}

  	public getRole(): Role {
		return this.role;
	}

	public setRole(value: Role) {
		this.role = value;
	}
}

export interface IUser {
  id: number;
  uid: String;
  email: String;
  name: String;
  password: String;
  providers: String;
  last_login: String;
  is_active: boolean;
  updated_at: String;
  timestamp: String;
  role: Role;
}



export enum Role {
    ADMIN = 'admin',
    CHIEFEDITOR = 'chiefeditor',    
    EDITOR = 'editor',
    USER = 'user'
}