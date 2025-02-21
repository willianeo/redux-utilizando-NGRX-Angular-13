import { createAction, props } from "@ngrx/store"
import { UsuarioModel } from "src/app/Models/UsuarioModel";

export const enum usuariosTypeAction {
    LOAD_USUARIOS = '[LOAD_USUARIOS] LOAD USUARIOS',
    LOAD_USUARIOS_SUCCESS = '[LOAD _USUARIOS_SUCCESS] LOAD USUARIOS SUCCESS',
    LOAD_USUARIOS_FAIL = '[LOAD_USUARIOS_FAIL] LOAD USUARIOS FAIL',


    LOAD_USUARIO = '[LOAD_USUARIO] LOAD USUARIO',
    LOAD_USUARIO_SUCCESS = '[LOAD _USUARIO_SUCCESS] LOAD USUARIO SUCCESS',
    LOAD_USUARIO_FAIL = '[LOAD_USUARIO_FAIL] LOAD USUARIO FAIL',


    CREATE_USUARIO = '[CREATE_USUARIO] CREATE USUARIO',
    CREATE_USUARIO_SUCCESS = '[CREATE_USUARIO_SUCCESS] CREATE USUARIO SUCCESS',
    CREATE_USUARIO_FAIL = '[CREATE_USUARIO_FAIL] CREATE USUARIO FAIL',


    UPDATE_USUARIO = '[UPDATE_USUARIO] UPDATE USUARIO',
    UPDATE_USUARIO_SUCCESS = '[UPDATE_USUARIO_SUCCESS] UPDATE USUARIO SUCCESS',
    UPDATE_USUARIO_FAIL = '[UPDATE_USUARIO_FAIL] UPDATE USUARIO FAIL',


    DELETE_USUARIO = '[DELETE_USUARIO] DELETE USUARIO',
    DELETE_USUARIO_SUCCESS = '[DELETE_USUARIO_SUCCESS] DELETE USUARIO SUCCESS',
    DELETE_USUARIO_FAIL = '[DELETE_USUARIO_FAIL] DELETE USUARIO FAIL'
}

// Load Usuarios
export const LoadUsuarios = createAction(
    usuariosTypeAction.LOAD_USUARIOS
);

export const LoadUsuariosSuccess = createAction(
    usuariosTypeAction.LOAD_USUARIOS_SUCCESS, props<{ payload: UsuarioModel[] }>()
);

export const LoadUsuariosFail = createAction(
    usuariosTypeAction.LOAD_USUARIOS_FAIL, props<{ error: string }>()
);

// Load Usuario
export const LoadUsuario = createAction(
    usuariosTypeAction.LOAD_USUARIO, props<{ payload: number }>()
);

export const LoadUsuarioSuccess = createAction(
    usuariosTypeAction.LOAD_USUARIO_SUCCESS, props<{ payload: UsuarioModel }>()
);

export const LoadUsuarioFail = createAction(
    usuariosTypeAction.LOAD_USUARIO_FAIL, props<{ error: string }>()
);

// Create Usuario
export const CreateUsuario = createAction(
    usuariosTypeAction.CREATE_USUARIO_SUCCESS, props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioSuccess = createAction(
    usuariosTypeAction.CREATE_USUARIO_SUCCESS, props<{ payload: UsuarioModel }>()
);

export const CreateUsuarioFail = createAction(
    usuariosTypeAction.CREATE_USUARIO_FAIL, props<{ error: string }>()
);

// Update Usuario
export const UpdateUsuario = createAction(
    usuariosTypeAction.UPDATE_USUARIO, props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioSuccess = createAction(
    usuariosTypeAction.UPDATE_USUARIO_SUCCESS, props<{ payload: UsuarioModel }>()
);

export const UpdateUsuarioFail = createAction(
    usuariosTypeAction.UPDATE_USUARIO_FAIL, props<{ error: string }>()
);

// Delete Usuario
export const DeleteUsuario = createAction(
    usuariosTypeAction.DELETE_USUARIO, props<{ payload: number }>()
);

export const DeleteUsuarioSuccess = createAction(
    usuariosTypeAction.DELETE_USUARIO_SUCCESS, props<{ payload: number }>()
);

export const DeleteUsuarioFail = createAction(
    usuariosTypeAction.DELETE_USUARIO_FAIL, props<{ error: String }>()
);
