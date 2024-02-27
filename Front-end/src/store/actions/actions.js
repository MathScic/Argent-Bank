export const USER_PROFILE = 'USER_PROFILE' 

export const userProfile = (profile) => {
    return {
        type: USER_PROFILE,
        payload: profile,
    }
}