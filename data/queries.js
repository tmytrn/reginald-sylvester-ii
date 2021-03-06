export const postQuery = `  
  *[_type=="post" && slug.current==$slug]{
    title,
    slug,
    location,
    date,
    'modules' : modules[]{
      _type == 'fiftyFifty' => {
      _type,
      modules[]{
        _type == 'reference' => @->{
          _type,
          title,
          date,
          etc,
          image{
            asset->{url}
          }
        },
        _type =='blockText' => {
          _type,
          blocks,
        }
      }},
      _type == 'fullWidth' => {
        _type,
        modules[]{
          ...,
          _type == 'artwork' => @->{
          _type,
          title,
          date,
          etc,
          image{
            asset->{url}
          }
          },
          _type =='blockText' => {
            _type,
            blocks,
          }
        }
       }
}
  }`;

export const categoryQuery = `
*[_type == "siteconfig"]{
  categories[]->{
    name,
      "posts": *[_type=="post" && categories->name==^.name]{    title,
        slug,
        location,
        date,
        'modules' : modules[]{
          _type == 'fiftyFifty' => {
          _type,
          modules[]{
            _type == 'reference' => @->{
              _type,
              title,
              date,
              etc,
              image{
                asset->{url}
              }
            },
            _type =='blockText' => {
              _type,
              blocks,
            }
          }},
          _type == 'fullWidth' => {
            _type,
            modules[]{
              ...,
              _type == 'artwork' => @->{
              _type,
              title,
              date,
              etc,
              image{
                asset->{url}
              }
              },
              _type =='blockText' => {
                _type,
                blocks,
              }
            }
           }
    }}
  }
}
`;
