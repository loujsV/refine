import gql from "graphql-tag";

const QUOTE_FRAGMENT = gql`
    fragment QuoteFields on Quote {
        id
        title
        status
        description
        subTotal
        total
        tax
        createdAt
        items {
            title
            unitPrice
            quantity
            discount
            totalPrice
        }
        company {
            id
            name
            country
            website
            avatarUrl
        }
        salesOwner {
            id
            name
        }
        contact {
            id
            name
        }
    }
`;


// export const QUOTES_CREATE_QUOTE_MUTATION = gql`
//     mutation QuotesCreateQuote($input: CreateOneQuoteInput!) {
//         createOneQuote(input: $input) {
//             ...QuoteFields
//         }
//     }
//     ${QUOTE_FRAGMENT}
// `;

// export const QUOTES_UPDATE_QUOTE_MUTATION = gql`
//     mutation QuotesUpdateQuote($input: UpdateOneQuoteInput!) {
//         updateOneQuote(input: $input) {
//             ...QuoteFields
//         }
//     }
//     ${QUOTE_FRAGMENT}
// `;

export const REFRESH_TOKEN_MUTATION = gql`
    mutation refreshToken($refreshToken: String!) {
        refreshToken(refreshToken: $refreshToken) {
            accessToken
            refreshToken
        }
    }
`;



const EVENT_FRAGMENT = gql`
    fragment EventFragment on Event {
        id
        title
        description
        startDate
        endDate
        color
        createdAt
        createdBy {
            id
            name
        }
        category {
            id
            title
        }
        participants {
            id
            name
        }
    }
`;

// export const CALENDAR_UPDATE_EVENT_MUTATION = gql`
//     mutation UpdateEvent($input: UpdateOneEventInput!) {
//         updateOneEvent(input: $input) {
//             ...EventFragment
//         }
//     }
//     ${EVENT_FRAGMENT}
// `;

// export const CALENDAR_GET_EVENT_QUERY = gql`
//     query GetEvent($id: ID!) {
//         event(id: $id) {
//             ...EventFragment
//         }
//     }
//     ${EVENT_FRAGMENT}
// `;

export const ACCOUNT_SETTINGS_UPDATE_USER_MUTATION = gql`
    mutation AccountSettingsUpdateUser($input: UpdateOneUserInput!) {
        updateOneUser(input: $input) {
            id
            name
            email
            avatarUrl
            jobTitle
            phone
            timezone
        }
    }
`;

export const UPDATE_USER_MUTATION = gql`
  # The ! after the type means that it is required
  mutation UpdateUser($input: UpdateOneUserInput!) {
    # call the updateOneUser mutation with the input and pass the $input argument
    # $variableName is a convention for GraphQL variables
    updateOneUser(input: $input) {
      id
      name
      avatarUrl
      email
      phone
      jobTitle
    }
  }
`;

// Mutation to create company
export const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompany($input: CreateOneCompanyInput!) {
    createOneCompany(input: $input) {
      id
      salesOwner {
        id
      }
    }
  }
`;

// Mutation to update company details
export const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompany($input: UpdateOneCompanyInput!) {
    updateOneCompany(input: $input) {
      id
      name
      totalRevenue
      industry
      companySize
      businessType
      country
      website
      avatarUrl
      salesOwner {
        id
        name
        avatarUrl
      }
    }
  }
`;

// Mutation to update task stage of a task
export const UPDATE_TASK_STAGE_MUTATION = gql`
  mutation UpdateTaskStage($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
    }
  }
`;

// Mutation to create a new task
export const CREATE_TASK_MUTATION = gql`
  mutation CreateTask($input: CreateOneTaskInput!) {
    createOneTask(input: $input) {
      id
      title
      stage {
        id
        title
      }
    }
  }
`;

// Mutation to update a task details
export const UPDATE_TASK_MUTATION = gql`
  mutation UpdateTask($input: UpdateOneTaskInput!) {
    updateOneTask(input: $input) {
      id
      title
      completed
      description
      dueDate
      stage {
        id
        title
      }
      users {
        id
        name
        avatarUrl
      }
      checklist {
        title
        checked
      }
    }
  }
`;