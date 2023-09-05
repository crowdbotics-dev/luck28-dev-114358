import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_kudida_list = createAsyncThunk(
  "kudidas/api_v1_kudida_list",
  async payload => {
    const response = await apiService.api_v1_kudida_list(payload)
    return response.data
  }
)
export const api_v1_kudida_create = createAsyncThunk(
  "kudidas/api_v1_kudida_create",
  async payload => {
    const response = await apiService.api_v1_kudida_create(payload)
    return response.data
  }
)
export const api_v1_kudida_retrieve = createAsyncThunk(
  "kudidas/api_v1_kudida_retrieve",
  async payload => {
    const response = await apiService.api_v1_kudida_retrieve(payload)
    return response.data
  }
)
export const api_v1_kudida_update = createAsyncThunk(
  "kudidas/api_v1_kudida_update",
  async payload => {
    const response = await apiService.api_v1_kudida_update(payload)
    return response.data
  }
)
export const api_v1_kudida_partial_update = createAsyncThunk(
  "kudidas/api_v1_kudida_partial_update",
  async payload => {
    const response = await apiService.api_v1_kudida_partial_update(payload)
    return response.data
  }
)
export const api_v1_kudida_destroy = createAsyncThunk(
  "kudidas/api_v1_kudida_destroy",
  async payload => {
    const response = await apiService.api_v1_kudida_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const kudidasSlice = createSlice({
  name: "kudidas",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_kudida_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kudida_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kudida_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kudida_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kudida_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kudida_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_kudida_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_kudida_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_kudida_list,
  api_v1_kudida_create,
  api_v1_kudida_retrieve,
  api_v1_kudida_update,
  api_v1_kudida_partial_update,
  api_v1_kudida_destroy,
  slice: kudidasSlice
}
