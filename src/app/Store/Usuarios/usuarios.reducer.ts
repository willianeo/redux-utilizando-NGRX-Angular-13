import { Action, createReducer, on } from "@ngrx/store";
import { UsuarioModel } from "src/app/Models/UsuarioModel";
import * as fromUsuariosAction from "./usuarios.actions";

export interface UsuarioState {
    usuarios: UsuarioModel[],
    usuario: UsuarioModel | null,
    error: string | ''
}

export const initialState: UsuarioState = {
    usuarios: [],
    usuario: null,
    error: ''
}

const _usuariosReducer = createReducer(
    initialState,

    // load allusuarios
    on(fromUsuariosAction.LoadUsuariosSuccess, (state, { payload }) => ({ ...state, usuarios: payload, error: '' })),
    on(fromUsuariosAction.LoadUsuariosFail, (state, { error }) => ({ ...state, usuarios: [], error: error })),

    // load usuario
    on(fromUsuariosAction.LoadUsuarioSuccess, (state, { payload }) => ({ ...state, usuario: payload, error: '' })),
    on(fromUsuariosAction.LoadUsuarioFail, (state, { error }) => ({ ...state, usuario: null, error: error })),

    // create
    on(fromUsuariosAction.CreateUsuarioSuccess, (state, { payload }) => ({ ...state, usuarios: [...state.usuarios, payload], error: ''})),
    on(fromUsuariosAction.CreateUsuarioFail, (state, { error }) => ({ ...state, error: error }))
)

export function usuariosReducer(state = initialState, action: Action) {
    return _usuariosReducer(state, action);
}