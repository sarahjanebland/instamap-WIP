get '/' do
  # Look in app/views/index.erb
  erb :index
end

get "/oauth/connect" do
  redirect Instagram.authorize_url(:redirect_uri => CALLBACK_URL)
end

get "/oauth/callback" do
  response = Instagram.get_access_token(params[:code], :redirect_uri => CALLBACK_URL)
  session[:access_token] = response.access_token
  redirect "/feed"
end

get "/feed" do
  @client = Instagram.client(:access_token => session[:access_token])
  # user = client.user
  @user_media_items = @client.user_recent_media
  @local_media_items = @client.media_search("37.7808851","-122.3948632") #get these from map
erb :photos
end
